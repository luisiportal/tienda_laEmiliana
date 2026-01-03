<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nombre');
            $table->string('description');
            $table->decimal('price_usd');
            $table->decimal('cost');
            $table->integer('stock');
            $table->foreignId('categoria')
                ->constrained('categorias')
                ->onDelete('cascade');
            $table->string('alias');
            $table->string('image');
            $table->boolean('agotado');
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
