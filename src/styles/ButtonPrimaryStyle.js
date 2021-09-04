export default (style)=>{
  return(`

    .ButtonPrimary {
      align-items: center;
      align-self: center;
      background: ${style.colors.primary};
      border-radius: 9999rem;
      border: 1px solid transparent;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      color: ${style.colors.buttonText};
      display: inline-flex;
      flex: 1;
      font-size: 1.3rem;
      font-weight: 400;
      height: 2.8rem;
      justify-content: center;
      min-width: 12rem;
      padding: 0 1.4rem;
      position: relative;
      text-align: center;
      text-decoration: none;
      transition: background 0.1s;
      vertical-align: middle;
    }

    .ButtonPrimary.round {
      padding: 0;
      width: 3.4rem;
      line-height: 3.2rem;
    }

    .ButtonPrimary.wide {
      border-radius: 0.8rem;
      width: 100%;
    }

    .ButtonPrimary.disabled {
      background: rgb(210,210,210);
      color: rgb(140,140,140);
    }

    .ButtonPrimary:not(.disabled){
      cursor: pointer;
    }
    .ButtonPrimary:not(.disabled):hover {
      box-shadow: inset 0 0 300px rgba(0,0,0,0.1);
    }
    .ButtonPrimary:not(.disabled):active {
      box-shadow: inset 0 0 300px rgba(0,0,0,0.2);
    }
  `)
}