import profile from '../../assets/profile.jpg'

export const Hero = () => {
    return <>
        <div className="container mt-5">
            <div style={{ height: 600 }} className="card p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0 d-flex flex-row justify-content-center align-items-center gap-5">
                <div style={{ width: 300, height: 300 }} className="bg-success rounded-circle p-1">
                    <img className='rounded-circle object-fit-cover w-100' src={profile} alt="" />
                </div>
                <div>
                    <h1 className="fw-bolder">Hi, I'm <span className="text-success">Vishal</span></h1>
                    <h4 className="fw-light mb-4">FullStack Developer</h4>
                    <p className="d-flex gap-2">
                        <i class="bi bi-linkedin text-success fs-4"></i>
                        <i class="bi bi-github text-success fs-4"></i>
                        <i class="bi bi-facebook text-success fs-4"></i>
                        <i class="bi bi-twitter text-success fs-4"></i>
                    </p>
                </div>
            </div>
        </div>
    </>
}