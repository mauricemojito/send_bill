from allauth.account.forms import SignupForm
from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

from .models import Team, Invitation, Membership
from .helpers import get_next_unique_team_slug, create_default_team_for_user


class TeamSignupForm(SignupForm):
    invitation_id = forms.CharField(widget=forms.HiddenInput(), required=False)
    team_name = forms.CharField(
        label=_("Team Name (Optional)"),
        max_length=100,
        widget=forms.TextInput(attrs={'placeholder': _('Team Name (Optional)')}),
        required=False,
    )

    def clean_team_name(self):
        team_name = self.cleaned_data['team_name']
        invitation_id = self.cleaned_data.get('invitation_id')
        # if invitation is not set then team name is required
        if not invitation_id and not team_name:
            email = self.cleaned_data.get('email')
            if email is not None:
                team_name = f"{email.split('@')[0]}"
        return team_name

    def clean_invitation_id(self):
        invitation_id = self.cleaned_data.get('invitation_id')
        if invitation_id:
            try:
                invite = Invitation.objects.get(id=invitation_id)
                if invite.is_accepted:
                    raise forms.ValidationError(_(
                        'It looks like that invitation link has expired. '
                        'Please request a new invitation or sign in to continue.'
                    ))
            except (Invitation.DoesNotExist, ValidationError):
                # ValidationError is raised if the ID isn't a valid UUID, which should be treated the same
                # as not found
                raise forms.ValidationError(_(
                    'That invitation could not be found. '
                    'Please double check your invitation link or sign in to continue.'
                ))
        return invitation_id

    def save(self, request):
        invitation_id = self.cleaned_data['invitation_id']
        team_name = self.cleaned_data['team_name']
        user = super().save(request)

        if invitation_id:
            assert not team_name
        else:
            create_default_team_for_user(user, team_name)

        return user


class MembershipForm(forms.ModelForm):

    class Meta:
        model = Membership
        fields = ('role',)
