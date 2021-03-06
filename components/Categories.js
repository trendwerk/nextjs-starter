import classnames from 'classnames'
import Link from 'components/Link'

export default function Categories({ categories, currentCategory }) {
  return (
    <div>
      <h3 className="mb-6">Blog categories</h3>
      <ul className="list-none border-b">
        <Link
          href="/blog"
          className={classnames(
            'flex',
            'py-3',
            'px-3',
            'border-t',
            'hover:bg-gray-100',
            currentCategory === undefined && 'font-bold'
          )}
        >
          All categories
        </Link>
        {categories.edges.map(({ category }) => (
          <Category
            key={category.id}
            category={category}
            currentCategory={currentCategory}
          />
        ))}
      </ul>
    </div>
  )
}

const Category = ({ category, currentCategory }) => (
  <li key={category.id} className="m-0">
    <Link
      href={category.uri}
      className={classnames(
        'flex',
        'py-3',
        'px-3',
        'border-t',
        'hover:bg-gray-100',
        currentCategory == category.id && 'font-bold'
      )}
    >
      {category.name}
    </Link>
    {category.children && category.children.edges.length > 0 && (
      <ul className="list-none ml-4">
        {category.children.edges.map(({ node }) => (
          <Category
            key={node.id}
            category={node}
            currentCategory={currentCategory}
          />
        ))}
      </ul>
    )}
  </li>
)
