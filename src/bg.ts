import { create, format, toClassList } from './_utils/helpers'
import { Argument } from './_utils/types'

export default (...args: Argument[]): string =>
	format(
		toClassList(create('bg'), args).replace(
			'bg-full-cover',
			'bg-cover bg-center bg-no-repeat'
		)
	)
