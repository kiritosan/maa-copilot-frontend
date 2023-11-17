import { Button } from '@blueprintjs/core'

import { useAtomValue, useSetAtom } from 'jotai'

import { navAtom, toggleExpandNavAtom } from 'store/nav'

export const NavExpandButton = () => {
  const expanded = useAtomValue(navAtom)
  const toggleExpand = useSetAtom(toggleExpandNavAtom)

  return (
    <div className="sm:hidden">
      <Button
        onClick={toggleExpand}
        icon={expanded.expanded ? 'cross' : 'menu'}
      />
    </div>
  )
}
