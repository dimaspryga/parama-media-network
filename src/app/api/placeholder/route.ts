import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = parseInt(searchParams.get('width') || '400')
  const height = parseInt(searchParams.get('height') || '300')
  const text = searchParams.get('text') || 'Placeholder'

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <rect x="2" y="2" width="${width - 4}" height="${height - 4}" fill="none" stroke="#d1d5db" stroke-width="2" stroke-dasharray="5,5"/>
      <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 20}" fill="#6b7280" font-weight="bold">
        ${text}
      </text>
      <text x="50%" y="60%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 25}" fill="#9ca3af">
        ${width} × ${height}
      </text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  })
} 