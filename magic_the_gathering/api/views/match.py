from rest_framework import viewsets
from magic_the_gathering.api.serializers.match import MatchSerializer
from magic_the_gathering.models import Match


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
