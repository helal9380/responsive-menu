/** @format */

import PropTypes from "prop-types";
const Links = ({ route }) => {
  const { path, name } = route;
  return (
    <li className="border-b md:border-none border-b-slate-400 py-2">
      <a
        className=""
        href={path}>
        {name}
      </a>
    </li>
  );
};

Links.propTypes = {
  route: PropTypes.object,
};
export default Links;
