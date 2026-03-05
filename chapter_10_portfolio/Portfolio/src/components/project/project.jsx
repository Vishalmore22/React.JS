import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
export const Project = () => {
    return <>
        <div className="container">
            <div style={{ height: 600 }} className="card p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0">
                <h1 className="fw-bold text-center mt-2 mb-5">Project</h1>
                <div className="d-flex justify-content-between">
                    <div className="card border-0 shadow rounded-5" style={{ width: 300, height: 390 }}>
                        <div className="card-body">
                            <img src={p1} className="w-100 rounded-4" />
                            <p className="card-text">
                                <h4 className="text-center m-2">TO-DO List</h4>
                                <p>This is a simple To-Do List application that helps users manage daily tasks. Users can add, view, and delete tasks to stay organized and improve productivity.</p>
                            </p>
                        </div>
                    </div>
                    <div className="card border-0 shadow rounded-5" style={{ width: 300, height: 390 }}>
                        <div className="card-body">
                            <img src={p2} className="w-100 rounded-4" />
                            <p className="card-text">
                                <h4 className="text-center mt-4">E-COMMERCE</h4>
                                <p>This is a simple e-commerce application where users can browse products, view details, and manage items in a shopping cart. The project focuses on creating a user-friendly online shopping experience.</p>
                            </p>
                        </div>
                    </div>
                    <div className="card border-0 shadow rounded-5" style={{ width: 300, height: 390 }}>
                        <div className="card-body">
                            <img src={p3} className="w-100 rounded-4" />
                            <p className="card-text">
                                <h4 className="text-center m-2">Weather App</h4>
                                <p>This is a simple Weather App that allows users to check current weather conditions for different cities. It displays information such as temperature, weather status, and other details using a clean and user-friendly interface.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}