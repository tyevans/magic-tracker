from django.contrib import admin
from suit.admin import SortableTabularInline
from magic_the_gathering.models import Match, MatchResult


class MatchResultInline(SortableTabularInline):
    model = MatchResult
    fields = ["player", "result"]
    sortable = 'result'


class MatchAdmin(admin.ModelAdmin):
    fields = ["played_on", "winner"]
    inlines = [MatchResultInline]


admin.site.register(Match, MatchAdmin)
