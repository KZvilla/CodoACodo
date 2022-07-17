<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Panel Administracion</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Bootstrap CSS v5.2.0-beta1 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <!-- Bootstrap JavaScript Libraries -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
      integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
      crossorigin="anonymous"
    ></script>
    <main>
      <h1>Plantillas de registro</h1>
      <table class='table' aria-describedby='tablaUsuarios'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Telefono</th>
            <th scope='col'>Correo</th>
            <th scope='col'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        <?php while ($filaTD = $lista = mysqli_fetch_array($consultas)) {
    ?>
          <tr>
            <th scope='row'><?php echo $filaTD['id_usuarios']; ?></th>
            <th scope='row'><?php echo $filaTD['nombre']; ?></th>
            <th scope='row'><?php echo $filaTD['apellido']; ?></th>
            <th scope='row'><?php echo $filaTD['telefono']; ?></th>
            <th scope='row'><?php echo $filaTD['correo']; ?></th>
            <th scope='row'><a href="eliminar.php?id=<?php echo $filaTD['id_usuarios']?>"><i class="fa-solid fa-trash"></a></th>
          </tr>
          <?php
}?>
        </tbody>
      </table>
      <div class="container align-items-center justify-content-center m-auto row g-1">
        <button data-bs-toggle="modal" data-bs-target="#editarmod" class="btn btn-primary col-3">Editar</button>
        <button data-bs-toggle="modal" data-bs-target="#eliminarmod" class="btn btn-danger col-3">Eliminar</button>
      </div>
          <!-- Modal Eliminar -->
    <div
      class="modal fade"
      id="eliminarmod"
      tabindex="-1"
      aria-labelledby="eliminarmod"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header modal--back">
            <h5 class="modal-title text-dark w-100 text-center">
              Panel de Eliminacion
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modal--back">
            <form action="eliminar.php" method="GET">
              <label for="eliminar">Indique el ID a eliminar</label>
              <input type="text" id="eliminar" name="id">
              <button type="submit" class="btn btn-primary">Aplicar</button>
            </form>
          </div>
          <div class="modal-footer modal--back">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
          <!-- Modal Edicion -->
    <div
      class="modal fade"
      id="editarmod"
      tabindex="-1"
      aria-labelledby="editarmod"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header modal--back">
            <h5 class="modal-title text-dark w-100 text-center">
              Panel de edicion
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body modal--back">
      <form
        action="editar.php"
        class="row container mx-auto p-4 justify-content-center gx-0"
        method="POST">
        <div class="col-3 p-0 pe-1">
          <input
            required
            type="number"
            class="form-control"
            placeholder="ID"
            name="id"
          />
        </div>
        <div class="col-3 p-0 pe-1">
          <input
            required
            type="text"
            pattern="[a-zA-Z]*"
            class="form-control"
            placeholder="Nombre"
            aria-label="First name"
            name="nombre"
            value=""
          />
        </div>
        <div class="col-3 p-0 ps-1">
          <input
            required
            type="text"
            pattern="[a-zA-Z]*"
            class="form-control"
            placeholder="Apellido"
            aria-label="Last name"
            name="apellido"
            value=""
          />
        </div>
        <div class="row g-2 p-0 justify-content-center">
          <div class="col-3 p-0">
            <input
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              type="email"
              class="form-control"
              placeholder="Correo"
              name="correo"
              value=""
            />
          </div>
          <div class="col-3 p-0">
            <input
              required
              type="tel"
              class="form-control"
              placeholder="Telefono"
              name="telefono"
              value=""
            />
          </div>
        </div>
        <div class="row justify-content-center g-2 m-0 p-0">
          <div class="col-3 d-grid p-0 pe-1">
            <button
              class="btn btn-success btn--enviar noseleccionar"
              type="reset"
            >
              Borrar
            </button>
          </div>
          <div class="col-3 d-grid p-0 ps-1">
            <button
              class="btn btn-success btn--enviar noseleccionar"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
          </div>
          <div class="modal-footer modal--back">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
      integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
