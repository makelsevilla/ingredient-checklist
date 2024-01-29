<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_checklist_ingredients', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_checklist_id")->constrained("user_checklists");
            $table->string("name");
            $table->boolean("checked");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_checklist_ingredients');
    }
};
