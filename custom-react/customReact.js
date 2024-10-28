/* End of the day the code you write in the jsx and parse this behind the scene */

const customRender = (reactElement, container) => {
  // #1 Approach
  /*const domElement = document.createElement('a')
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  container.appendChild(domElement)
  */

  // #2 Approach

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
    children: 'Visit Google'
  },
  children: 'Click here to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
