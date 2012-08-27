from django.contrib import admin
from cms.admin.placeholderadmin import PlaceholderAdmin
from models import Outline,OutlineBlock

class TextInline(admin.StackedInline):
    model = OutlineBlock

class OutlineAdmin(admin.ModelAdmin):
    inlines = [TextInline]

admin.site.register(Outline, OutlineAdmin)
