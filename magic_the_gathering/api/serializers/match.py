from django.contrib.auth.models import User
from rest_framework import serializers
from magic_the_gathering.models import Match, MatchResult


class MatchResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchResult
        fields = ('player', 'result', 'season')

class MatchSerializer(serializers.HyperlinkedModelSerializer):
    results = MatchResultSerializer(many=True)

    class Meta:
        model = Match
        fields = ('id', 'played_on', 'results')