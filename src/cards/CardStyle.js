import styled from 'styled-components'

const StyledCard = styled.section`
  display: grid;
  grid-template-rows: 40px auto;
  width: 650px;
  height: 100px;
  max-height: 120px;
  padding: 20px 16px 20px 16px;

  .card__header {
    display: grid;
    grid-template-columns: 40px 1fr 40px;
  }

  .card__avatar {
    display: flex;
    width: 100%;
  }

  .card__items {
    display: grid;
    grid-template-rows: 22px 18px;
  }

  .card__author {
    display: flex;
    width: 100%;
    font-weight: 500;
  }

  .card__date {
    display: flex;
    width: 100%;
  }

  .card__action {
    display: flex;
    width: 100%;
    border: 1px solid #eee;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 16px;
  }

  .card__message {
    display: flex;
    width: 100%;
  }
`

export default StyledCard
