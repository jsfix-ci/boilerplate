import {
    groupWith, sortBy, eqProps, o, map, prop, over, set, lensPath, lensProp, omit, when, pathSatisfies, is
} from 'ramda'
import compose from './compose'

// groupByProp :: Str -> [Obj] -> [[Obj]]
export const groupByProp = (key) => compose(
  groupWith(eqProps(key)),
  sortBy(prop(key))
);

// setupSlides :: Obj -> [[Object]]
export const setupSlides = (compose as any)(
  set(lensPath([0, 0, 'active']), true),
  prop('slides') as any,
  over(lensProp('slides'), groupByProp('id'))
);


// existsObjAt :: [Int] -> Bool
export const existsObjAt = pos2dPath => pathSatisfies(is(Object), pos2dPath);

// wipeActiveStatus :: [[{k: v}]] -> [[{k: v}]]
export const wipeActiveStatus = map(map(omit(['active'])));

// setActiveAt :: [Int] -> [[{k: v}]] -> [[{k: v}]]
export const setActiveAt = pos2dPath => set(lensPath([...pos2dPath, 'active']), true);

// activeSlide :: [[{k: v}]] -> [[{k: v}]]
export const activeSlide = (pos2dPath) => o(
  when(
    existsObjAt(pos2dPath),
    setActiveAt(pos2dPath)
  ),
  wipeActiveStatus
);
