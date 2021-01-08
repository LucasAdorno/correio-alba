import React, { useEffect } from "react";
import api from "../../services/api";
// import { Container } from './styles';

interface Props {
  match: {
    params: {
      query: string;
      startdate: string;
    };
  };
}

const SearchPage: React.FC<Props> = ({ match }) => {
  useEffect(() => {
    api
      .post("fulldata", { query: match.params.query })
      .then((response) => console.log(response.data));
  }, [match]);

  return <div />;
};

export default SearchPage;
