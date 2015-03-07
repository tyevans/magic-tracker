from django.conf import settings
from django.db import models


class Match(models.Model):
    played_on = models.DateTimeField()

    class Meta:
        verbose_name_plural = "Matches"

    def __str__(self):
        winner = self.results.first()
        if winner:
            name = "{} ({})".format(
               self.played_on.strftime("%Y-%m-%d %H:%M:%S"),
               winner.player.username
            )
        else:
            name = "{}".format(
               self.played_on.strftime("%Y-%m-%d %H:%M:%S"),
            )
        return name

class MatchResult(models.Model):
    match = models.ForeignKey(Match, related_name='results')
    player = models.ForeignKey(settings.AUTH_USER_MODEL)
    result = models.PositiveIntegerField()

    class Meta:
        ordering = ['result']
        verbose_name_plural = "Results"