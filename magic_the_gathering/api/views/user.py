from rest_framework import viewsets

from magic_the_gathering.api.serializers.user import PlayerSerializer
from magic_the_gathering.models import Player


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
