import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/actions/index";
import { ContainerPage, PrevNext, BtnPaged } from "../styles/Paged";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Paged({ gamesPerPage }) {
    const dispatch = useDispatch();
    const { games, page } = useSelector((state) => state);

    const changePage = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
     };
    const pageNumbers = [];  
     for(let i=1; i<=Math.ceil(games.length/gamesPerPage); i++){
         pageNumbers.push(i)
     }

     return(
        <div>
               {pageNumbers.length > 1 && (
        <PrevNext>
                <BtnPaged onClick={() => changePage(1)} 
                          disabled={page === 1}>
                          <BiFirstPage /> 
                          </BtnPaged>
                <BtnPaged onClick={() => changePage(page - 1)} 
                          disabled={page === 1}>
                          <IoIosArrowBack />
                          </BtnPaged>
                <span>
                  Página {page} de {pageNumbers.length}
                </span>
                <BtnPaged onClick={() => changePage(page + 1)} 
                          disabled={page >= pageNumbers.length}>
                          <IoIosArrowForward />
                          </BtnPaged>
                <BtnPaged onClick={() => changePage(pageNumbers.length)}
                          disabled={page >= pageNumbers.length}>
                          <BiLastPage />
                </BtnPaged>
        </PrevNext>
      )}
            <ContainerPage>
                {
                    pageNumbers?.map((page) =>(
                        <button onClick={() => changePage(page)} key={page}>
                            {page}
                        </button>
                    ))
                }
            </ContainerPage>
        </div>
    )
}