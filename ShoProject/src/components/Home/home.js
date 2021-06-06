import React, { useState } from 'react'
import photo_home from '../../images/photo_home.jpg'

export default function Home(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = React.Children.count(props.children);

    function pageComponent(pageIndex) {
        const child = React.Children.toArray(props.children)[pageIndex]
        console.log('child is: ' + child)
        return React.cloneElement(child)

    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"
                        disabled={currentPage === 0}
                        onClick={(e) => setCurrentPage(v => v - 1)}>
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">
                        </span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"
                        disabled={currentPage >= numberOfPages - 1}
                        onClick={(e) => setCurrentPage(v => v + 1)}>
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">
                        </span>
                    </button>

                </div>
            </div >
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img src={photo_home} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        {console.log(pageComponent(currentPage))}

                    </div>
                </div>


            </div>


            {/* <h2>home</h2> */}



        </>
    )
}