<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "slug",
    ];

    public function products(){
        return $this->belongsToMany(Product::class, "category_product");
    }

}
