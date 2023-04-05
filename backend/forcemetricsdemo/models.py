from django.db import models

# Create your models here.
class ForceMetricsDemo(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)

    def _str_(self):
        return self.firstName + " " + self.lastName