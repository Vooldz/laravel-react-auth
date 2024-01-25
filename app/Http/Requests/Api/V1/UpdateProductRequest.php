<?php

namespace App\Http\Requests\Api\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'slug' => ['required', 'string', 'max:255'],
            'description' => ['nullable'],
            'price' => ['required', 'numeric', 'min:0', 'max:99999999.99'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,svg,webp', 'max:10240', 'dimensions:min_width=100,min_height=200'],
            'categories' => ['nullable', 'array'],
        ];
    }
}
