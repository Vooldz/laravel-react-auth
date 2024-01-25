<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Category;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\V1\CategoryResource;
use App\Http\Requests\Api\V1\StoreCategoryRequest;

class CategoryController extends Controller
{
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($data['title']) . '-' . uniqid();
        
        $category = Category::create($data);

        return response()->json(["message", "Category " . $data['title'] . " Created Successfully!"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->products()->detach();

        $category->delete();

        return response()->noContent();
    }
}
