# Nginx Setup Guide for Whekel.com

This guide explains how to set up nginx to serve the Whekel React application with domain forwarding.

## Prerequisites

- Nginx installed on your server
- Domain `whekel.com` pointing to your server's IP address
- SSL certificates (for production - use Let's Encrypt)
- React app built (`npm run build`)

## Installation Steps

### 1. Build the React Application

```bash
npm run build
```

This creates the `dist` directory with all static files.

### 2. Copy Build Files to Server

```bash
# Create directory for the application
sudo mkdir -p /var/www/whekel

# Copy build files
sudo cp -r dist/* /var/www/whekel/dist/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/whekel
sudo chmod -R 755 /var/www/whekel
```

### 3. Install Nginx Configuration

#### For Production (HTTPS):
```bash
# Copy the production configuration
sudo cp nginx.conf /etc/nginx/sites-available/whekel.com

# Create symbolic link
sudo ln -s /etc/nginx/sites-available/whekel.com /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default
```

#### For Development (HTTP Only):
```bash
# Copy the development configuration
sudo cp nginx.conf.dev /etc/nginx/sites-available/whekel.com

# Create symbolic link
sudo ln -s /etc/nginx/sites-available/whekel.com /etc/nginx/sites-enabled/
```

### 4. Update Configuration Paths

Edit the configuration file and update:
- `root /var/www/whekel/dist;` - Path to your build files
- `ssl_certificate` and `ssl_certificate_key` - Paths to your SSL certificates
- Backend API URL if different from the default

### 5. Set Up SSL Certificates (Production Only)

#### Using Let's Encrypt (Recommended):
```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d whekel.com -d www.whekel.com

# Certbot will automatically update your nginx configuration
```

### 6. Test Nginx Configuration

```bash
# Test configuration syntax
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

### 7. Start/Enable Nginx

```bash
# Start nginx
sudo systemctl start nginx

# Enable nginx to start on boot
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

## Configuration Details

### Port Forwarding

The configuration forwards:
- **Static files**: Served directly from `/var/www/whekel/dist`
- **API requests** (`/admin`, `/api`): Proxied to `http://ec2-3-84-40-197.compute-1.amazonaws.com:3001`

### React Router Support

All routes are configured to serve `index.html` to support client-side routing.

### Security Features

- HTTP to HTTPS redirect (production)
- Security headers (HSTS, X-Frame-Options, etc.)
- Hidden file protection
- SSL/TLS configuration

## Troubleshooting

### Check Nginx Logs
```bash
# Access logs
sudo tail -f /var/log/nginx/whekel_access.log

# Error logs
sudo tail -f /var/log/nginx/whekel_error.log
```

### Common Issues

1. **403 Forbidden**: Check file permissions on `/var/www/whekel`
2. **502 Bad Gateway**: Verify backend API is running and accessible
3. **SSL Certificate Errors**: Ensure certificates are valid and paths are correct
4. **Routes not working**: Verify `try_files` directive includes `/index.html`

## Updating the Application

After rebuilding the app:
```bash
# Build new version
npm run build

# Copy to server
sudo cp -r dist/* /var/www/whekel/dist/

# Reload nginx (no downtime)
sudo systemctl reload nginx
```

## Firewall Configuration

Ensure ports are open:
```bash
# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Check status
sudo ufw status
```

## Additional Notes

- The configuration supports both `whekel.com` and `www.whekel.com`
- Static assets are cached for 1 year
- API requests are proxied with proper headers for authentication
- Gzip compression is enabled for better performance

