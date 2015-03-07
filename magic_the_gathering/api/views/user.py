from django.contrib.auth.models import User
from rest_framework import viewsets

from magic_the_gathering.api.serializers.user import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
