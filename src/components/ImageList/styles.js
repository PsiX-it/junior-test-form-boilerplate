import styled from 'styled-components';

export const ImageListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    width: calc(50% - 10px);
    margin-bottom: 15px;

    .image-container {
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .header-item {
      display: flex;
      justify-content: space-between;

      p.date-add {
        font-size: 14px;
        color: #555;
        margin-bottom: 10px;
      }

      button {
        background: transparent;
        background-image: url(/images/trash_backet.png);
        border: none;
        cursor: pointer;
        background-size: 18px 20px;
        width: 18px;
        height: 20px;
      }
    }
  }
`;
