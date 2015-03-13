from rest_framework import serializers
from magic_the_gathering.models import Player

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Player
        fields = ('url', 'id', 'username', 'is_staff', 'first_name', 'last_name', 'number_of_wins')
