<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\Api\V1\ProductResource;
use App\Http\Resources\Api\V1\CategoryResource;
use App\Http\Requests\Api\V1\StoreProductRequest;
use App\Http\Requests\Api\V1\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categoryId = $request->query('category');

        $productsQuery = Product::with('categories');

        if ($categoryId && Category::find($categoryId)) {

            $productsQuery->whereHas('categories', function ($query) use ($categoryId) {
                $query->where('categories.id', $categoryId);
            });
        }

        $products = $productsQuery->paginate(10);

        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($data['name']) . '-' . uniqid();

        if ($request->hasFile('image')) {

            $path = $request->image->store('images', 'public');

            $data['image'] = Storage::url($path);
        }

        $product = Product::create($data);

        $product->categories()->attach($request->input('categories'));

        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return new ProductResource($product->load('categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($data['name']) . '-' . uniqid();

        if ($request->hasFile('image')) {

            $path = $request->image->store('images', 'public');

            $data['image'] = Storage::url($path);
        }

        $product->update($data);

        $product->categories()->sync($request->input('categories'));

        return new ProductResource($product);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->categories()->detach();

        $product->delete();

        return response()->noContent();
    }
}
