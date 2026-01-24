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
        Schema::create('entregas', function (Blueprint $table) {
            $table->id();
            $table->string('ordenante')->nullable();
            $table->string('beneficiario')->nullable();
            $table->string('tel_beneficiario', 20)->nullable();
            $table->string('p_referencia')->nullable();

            $table->foreignId('factura_id')
                ->constrained('facturas')
                ->onDelete('cascade');
            $table->string('contacto_ordenante')->nullable();
            $table->string('calle')->nullable();
            $table->string('numero')->nullable();
            $table->string('entrecalles')->nullable();
            $table->string('reparto')->nullable();
            $table->integer('envio');
            $table->text('observaciones')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entregas');
    }
};
