import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import {
  SearchArea,
  SearchBarArea,
  StyledFormControl,
  SearchButton,
  CategoriesArea,
  IconArea,
  TypeCategorieArea,
  PageArea,
  AdsArea,
  SeeAll
} from "./style";
import AdItem from "../../components/partials/AdItem/index";
import { Row, Col, InputGroup } from "react-bootstrap";
import { PageContainer, ErrorMessage } from "../../components/main-components";
import useAPI from "../../helpers/api";
import { doLogin } from "../../helpers/auth-handler";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const api = useAPI();
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [adsList, setAdsList] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const cList = await api.getCategories();
      setCategories(cList);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getRecentAds = async () => {
      const response = await api.getAds({
        sor: "desc",
        limit: 8
      });
      setAdsList(response.ads);
    };
    getRecentAds();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // setDisabled(true);
    // setError("");

    // const json = await api.login(email, password);

    // if (json.error) {
    //   setError(json.error);
    // } else {
    //   doLogin(json.token, rememberPassword);
    //   navigate("/");
    // }
    // setDisabled(false);
  };

  return (
    <>
      <SearchArea className="m-0">
        <SearchBarArea>
          <InputGroup>
            <StyledFormControl placeholder="Estou procurando por..." />
            <SearchButton id="button-addon2">
              <Icon.Search />
            </SearchButton>
          </InputGroup>
          <CategoriesArea>
            {categories.map((item, index) => {
              return (
                <TypeCategorieArea>
                  <IconArea
                    to={`/ads?cat=${item.slug}`}
                    className="categoryItem"
                  >
                    <img src={item.img} alt="" />
                    <div>{item.name}</div>
                  </IconArea>
                </TypeCategorieArea>
              );
            })}
          </CategoriesArea>
        </SearchBarArea>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <h5>Anúncios recentes</h5>
          <AdsArea>
            {adsList.map((item, index) => {
              return <AdItem key={index} data={item} />;
            })}
          </AdsArea>
          <SeeAll>
            <Link to="">Ver todos >></Link>
          </SeeAll>
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Home;
