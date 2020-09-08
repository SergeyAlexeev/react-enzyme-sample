import * as React from 'react';

const HeaderCellContent = ({ text }) => <div className="header-cell">{text}</div>;

// The class-based component fixes the test with the 'table.table' selector
// class HeaderCellContent extends React.Component {
//   render() {
//     return <div className="header-cell">{this.props.text}</div>
//   }
// }

export const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <HeaderCellContent text="a" />
          </th>
          <th>
            <HeaderCellContent text="b" />
          </th>
          <th>
            <HeaderCellContent text="c" />
          </th>
        </tr>
      </thead>
    </table>
  );
};