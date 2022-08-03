-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "logradouro" TEXT,
    "numero" INTEGER,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "senha" TEXT,
    "telefone" TEXT,
    "CEP" INTEGER
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "especie" TEXT NOT NULL,
    "raca" TEXT,
    "cor" TEXT,
    "nome" TEXT,
    "idade" INTEGER,
    "sexo" TEXT,
    "castrado" BOOLEAN,
    "vacinas" TEXT,
    "foto" BLOB NOT NULL
);

-- CreateTable
CREATE TABLE "Desaparecimento" (
    "user_id" INTEGER NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "ultimo_local_de_avistamento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "pet_id"),
    CONSTRAINT "Desaparecimento_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Desaparecimento_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Achado" (
    "user_id" INTEGER NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "local_encontrado" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "pet_id"),
    CONSTRAINT "Achado_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Achado_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Adocao" (
    "user_id" INTEGER NOT NULL,
    "pet_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "pet_id"),
    CONSTRAINT "Adocao_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Adocao_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
