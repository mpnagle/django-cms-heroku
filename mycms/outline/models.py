from django.db import models
from cms.models import CMSPlugin

# Create your models here.

class Outline(models.Model):
    parent = models.ForeignKey('self', blank=True, null=True)
    name = models.TextField(max_length=100)

    def __unicode__(self):
        return self.name
    
    
class OutlineBlock(models.Model):
    outline = models.ForeignKey(Outline)
    title = models.TextField(max_length=100)
    body = models.TextField(max_length=1000)
    id_number = models.IntegerField() #necesarry? objects have an auto-id...

class OutlinePlugin(CMSPlugin):
    outline = models.ForeignKey(Outline)
    
    def __unicode__(self):
        return self.title
