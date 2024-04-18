from django.urls import path

from . import views

app_name = 'articles'

urlpatterns = [
    path('products/', views.product_list, name='products'),
    path('products/<int:product_id>/', views.product_detail, name='product'),
    path('categories/', views.category_list, name='categories'),
    path('categories/<int:category_id>/', views.category_detail, name='category'),
    path('categories/<int:category_id>/products/', views.products_by_category, name='product_by_category'),
]