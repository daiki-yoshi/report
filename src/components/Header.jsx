export default function Header() {
    return (
        <header class="header">
          <h1 class="title">
            <a class="header-text" href="/">site-name</a>
          </h1>
          <nav class="header-nav-container">
            <ul class="header-nav">
              <li class="nav-item"><a class="header-text" href="#">Home</a></li>
              <li class="nav-item"><a class="header-text" href="#">1</a></li>
              <li class="nav-item"><a class="header-text" href="#">2</a></li>
              <li class="nav-item"><a class="header-text" href="#">3</a></li>
            </ul>
          </nav>
        </header>
    );
  }