export default function HomeLayout({children}: {children: React.ReactNode}) {
	
	return (
		<div className="flex items-center justify-center">
			{children}
		</div>
	)
}