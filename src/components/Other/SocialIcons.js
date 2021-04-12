import classNames from "classnames";

export default function SocialIcons({ className, colored }) {
  return (
    <ul className={`${classNames(className)} social-icons`}>
      <li>
        <a
          style={{ color: colored && "#2463ac" }}
          href="https://www.facebook.com/Le-Temps-Vert-105540794967778"
        >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li>
        <a
          style={{ color: colored && "#dd34c1" }}
          href="www.instagram.com/letempsvert/"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
    </ul>
  );
}
