from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import CommentSerializer
from .models import Comment
# from stix2patterns_translator.translator import translate, SearchPlatforms, DataModels
# from stix_shifter.stix_translation import stix_translation

# Create your views here.

# @api_view(['GET', 'POST'])
# def hello_world(request):
#     if request.method == 'POST':
#         # STIX 2 to elasticsearch
#         if request.data['label'] == 'Paste STIX 2 data here':
#             # converted = translate(request.data['stix'], SearchPlatforms.ELASTIC, DataModels.CAR)
#             converted = 123
#             return Response({"message": "Conversion complete!", "data": converted})

#         # JSON to STIX
#         if request.data['label'] == 'Paste JSON here':
#             # translation = stix_translation.StixTranslation()
#             # converted = translation.translate('qradar', 'results', '{}', request.data['stix'])
#             return Response({"message": "Conversion complete!", "data": converted})

#         # STIX to SQL
#         if request.data['label'] == 'Paste STIX here':
#             # translation = stix_translation.StixTranslation()
#             # converted = translation.translate('mysql', 'query', '{}', request.data['stix'])
#             return Response({"message": "Conversion complete!", "data": converted})
#     return Response({"message": "111Hello, world!"})

class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
