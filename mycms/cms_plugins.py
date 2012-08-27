from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from models import OutlinePlugin
from django.utils.translation import ugettext as _


class CMSOutlinePlugin(CMSPluginBase):
    model = OutlinePlugin
    name = _("Outline Plugin")
    render_template = "outline.html"

    def render(self, context, instance, placeholder):
        return context

plugin_pool.register_plugin(CMSOutlinePlugin)
