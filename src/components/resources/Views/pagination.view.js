import React from "react";
import {useTranslation} from "react-i18next";
import {encode} from 'base-64';

const Pagination = ({data, pageLimit, dataLimit}) => {
    const [pages, setPages] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);

    let {t} = useTranslation();

    if (pages < 10) {
        pageLimit = pages;
    }

    React.useEffect(() => {
        setPages(Math.ceil(data.length / dataLimit));

    }, []);


    function goToNextPage(e) {
        e.preventDefault();
        setCurrentPage((page) => {
            if (page >= pages)
                return page;
            return page + 1;
        });
    }

    function goToPreviousPage(e) {
        e.preventDefault();

        setCurrentPage((page) => {
            if (page == 1)
                return page;
            return page - 1;
        });
    }

    function changePage(event) {
        event.preventDefault();
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <React.Fragment>

            <div className="row">
                {
                    getPaginatedData().map((product, index) => {
                        return (
                            <div className="col-xs-12 col-sm-6 col-md-4 product-item" key={product._id}>
                                <div className="product--img">
                                    <img src={product.images[0].filename} alt="Product" style={{width:"250px",height:"350px"}}/>
                                    <div className="product--hover">
                                        <div className="product--action">
                                            <a href={t('shopUrl') + t('shopSingleUrl') + '/' + encode(product._id)}>{t('addToCard')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product--content">
                                    <div className="product--cat">
                                        <a href="#">{product.brand}</a>,Sizes:
                                        <a href="#">{product.sizes.toString()}</a>
                                    </div>
                                    <div className="product--title">
                                        <h3><a href="#">{product.product_name}</a></h3>
                                    </div>
                                    <div className="product--price">
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {pageLimit == 0 || pages==1 ? '' : (
                <div className="row">
                    <div className="col-xs-12 col-sm-12  col-md-12 clearfix  text--center">
                        <ul className="pagination">

                            <li className={`prev ${currentPage === 1 ? 'disabled' : ''}`} key="-1">
                                <a href="#" aria-label="Prev" onClick={goToPreviousPage}>
                                    <span aria-hidden="true"><i className="fa fa-angle-left"></i></span>
                                </a>
                            </li>
                            {
                                getPaginationGroup().map((item, index) => {
                                    return (
                                            <li
                                                className={`paginationItem ${currentPage === item ? 'active' : null}`}
                                                key={'page-' + index}>
                                                <a href="#" onClick={changePage}>{item}</a>
                                            </li>
                                    );
                                })

                            }

                            <li className={`next ${currentPage === pages ? 'disabled' : ''}`} key='-2'>
                                <a href="#" aria-label="Next" onClick={goToNextPage}>
                                    <span aria-hidden="true"><i className="fa fa-angle-right"></i></span>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
            )
            }

        </React.Fragment>
    );
}

export default Pagination;
