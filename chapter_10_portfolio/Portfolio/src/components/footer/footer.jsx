import footer from "../../assets/footer-1.gif";
export const Footer = () => {
    return <>
        <div className="container">
            <div style={{ height: 600 }} className="card p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0 d-flex flex-row justify-content-between">
                <div className="col-6">
                    <form className="card border-0 shadow rounded-4 p-5">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Phone </label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div><button type="submit" className="btn btn-primary">Submit</button></div>
                    </form>
                </div>
                <div className="col-6">
                    <h3 className="fw-bold text-center">Contact Us</h3>
                    <div className="fw-light text-center px-5 py-4">
                        <p>if you have any questions or want to get a free estimate for your mold situation contact us via email or phone call. Well will be happy to help you</p>
                        <p className="text-start ms-4"><i class="bi bi-telephone"></i> +916353011737</p>
                        <p className="text-start ms-4"><i class="bi bi-envelope"></i> vishalmoreee123@gmail.com</p>
                        <p className="text-start ms-4"><i class="bi bi-clock"></i> Monday - Friday<br />8:00 am - 5:00 am</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}