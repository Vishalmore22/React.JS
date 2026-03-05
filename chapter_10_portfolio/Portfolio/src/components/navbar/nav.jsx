
export const Navbar = () => {
    return <>
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-bottom-4 p-3 fs-6 shadow">
                <div class="container-fluid d-flex justify-content-center">
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Project</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    </>
}
