import styled from 'styled-components'

const StyledCard = styled.section`
  font-size: 14px;
  display: grid;
  grid-template-rows: 40px auto;
  width: 650px;
  min-height: 80px;
  max-height: 130px;
  padding: 20px 16px 20px 16px;
  color: #555;
  grid-gap: 8px;
  background-color: #fff;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .card__header {
    display: grid;
    grid-template-columns: 40px 1fr 56px;
    align-items: center;
  }

  .card__avatar {
    display: flex;
    width: 30px;
    height: 30px;
    background: #eee;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
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
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
  }

  .card__action {
    display: flex;
    width: 100%;
    height: 26px;
    border: 1px solid #eee;
    border-radius: 16px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      background: #eee;
    }

    &:focus {
      outline: none;
    }
  }

  .card__message {
    display: flex;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`

export default StyledCard
