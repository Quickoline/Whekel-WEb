# Hostinger DNS Records Configuration for Whekel.com

This guide explains how to configure DNS records in Hostinger to point your domain to your server.

## Prerequisites

- Domain `whekel.com` registered with Hostinger
- Server IP address where nginx is running
- Access to Hostinger control panel

## Required DNS Records

### 1. A Record for Root Domain (whekel.com)

**Purpose**: Points the main domain to your server's IP address

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `YOUR_SERVER_IP` | 3600 (or Auto) |

**Example**:
- **Type**: A
- **Name**: @ (or leave blank, or `whekel.com`)
- **Value**: `3.84.40.197` (replace with your actual server IP)
- **TTL**: 3600 seconds (1 hour) or Auto

### 2. A Record for WWW Subdomain (www.whekel.com)

**Purpose**: Points www.whekel.com to the same server

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | www | `YOUR_SERVER_IP` | 3600 (or Auto) |

**Example**:
- **Type**: A
- **Name**: www
- **Value**: `3.84.40.197` (replace with your actual server IP)
- **TTL**: 3600 seconds (1 hour) or Auto

## Alternative: Using CNAME for WWW

Instead of an A record for www, you can use a CNAME:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | whekel.com | 3600 (or Auto) |

**Note**: CNAME is easier to maintain as it automatically follows the A record.

## Complete DNS Configuration

Here's the complete set of DNS records you should have:

```
Type    Name    Value                    TTL
----    ----    -----                    ---
A       @       YOUR_SERVER_IP           3600
A       www     YOUR_SERVER_IP           3600
```

OR

```
Type    Name    Value                    TTL
----    ----    -----                    ---
A       @       YOUR_SERVER_IP           3600
CNAME   www     whekel.com               3600
```

## Step-by-Step Instructions for Hostinger

### Method 1: Using Hostinger hPanel

1. **Log in to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Navigate to DNS Zone Editor**
   - Click on "Domains" in the left sidebar
   - Select your domain `whekel.com`
   - Click on "DNS / Zone Editor" or "Manage DNS"

3. **Add A Record for Root Domain**
   - Click "Add Record" or "+"
   - Select **Type**: `A`
   - **Name/Host**: `@` or leave blank (represents root domain)
   - **Points to/Value**: Enter your server IP address (e.g., `3.84.40.197`)
   - **TTL**: `3600` or select "Auto"
   - Click "Add Record" or "Save"

4. **Add A Record for WWW**
   - Click "Add Record" or "+"
   - Select **Type**: `A`
   - **Name/Host**: `www`
   - **Points to/Value**: Enter the same server IP address
   - **TTL**: `3600` or select "Auto"
   - Click "Add Record" or "Save"

   **OR** use CNAME:
   - Click "Add Record" or "+"
   - Select **Type**: `CNAME`
   - **Name/Host**: `www`
   - **Points to/Value**: `whekel.com`
   - **TTL**: `3600` or select "Auto"
   - Click "Add Record" or "Save"

5. **Remove Conflicting Records**
   - If there are existing A or CNAME records pointing to different IPs, delete them
   - Look for any records with `@` or `www` that point to Hostinger's default IPs

6. **Save Changes**
   - Review all records
   - Click "Save" or "Apply Changes"

### Method 2: Using Advanced DNS (if available)

1. Go to **Domains** → **Advanced DNS**
2. Click **"Add New Record"**
3. Follow the same steps as above

## Important Notes

### Finding Your Server IP Address

If you're using AWS EC2:
- Check your EC2 instance's **Public IPv4 address** in the AWS Console
- Or run on your server: `curl ifconfig.me` or `curl ipinfo.io/ip`

### DNS Propagation

- **Propagation Time**: DNS changes can take 24-48 hours to propagate globally
- **Local Testing**: You can test immediately by editing your local `/etc/hosts` file (Linux/Mac) or `C:\Windows\System32\drivers\etc\hosts` (Windows)
- **Check Propagation**: Use tools like:
  - https://dnschecker.org
  - https://www.whatsmydns.net
  - `nslookup whekel.com` or `dig whekel.com`

### TTL (Time To Live) Settings

- **3600 seconds (1 hour)**: Good balance between updates and caching
- **Auto**: Hostinger will set an appropriate value
- **Lower TTL (300-600)**: Faster updates but more DNS queries
- **Higher TTL (86400)**: Better caching but slower updates

### Common Issues

1. **Domain Not Resolving**
   - Wait 24-48 hours for DNS propagation
   - Clear your DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
   - Check if records are correct using `nslookup` or `dig`

2. **WWW Not Working**
   - Ensure both `@` and `www` records point to the same IP
   - Verify nginx configuration includes `www.whekel.com` in server_name

3. **SSL Certificate Issues**
   - Ensure both `whekel.com` and `www.whekel.com` are in DNS before requesting SSL
   - Let's Encrypt needs both domains to be resolvable

## Verification Commands

After setting up DNS, verify with these commands:

```bash
# Check A record for root domain
nslookup whekel.com

# Check A record for www
nslookup www.whekel.com

# Using dig (Linux/Mac)
dig whekel.com
dig www.whekel.com

# Check from different locations
# Visit: https://dnschecker.org/#A/whekel.com
```

## Example DNS Records Summary

```
Domain: whekel.com
Server IP: 3.84.40.197 (REPLACE WITH YOUR ACTUAL IP)

DNS Records:
┌─────────┬──────┬──────────────────┬──────┐
│ Type    │ Name │ Value            │ TTL  │
├─────────┼──────┼──────────────────┼──────┤
│ A       │ @    │ 3.84.40.197      │ 3600 │
│ A       │ www  │ 3.84.40.197      │ 3600 │
└─────────┴──────┴──────────────────┴──────┘
```

## Additional Records (Optional)

### Email Records (if using email)

If you plan to use email with your domain, you may need:

```
Type    Name    Value                    Priority
----    ----    -----                    --------
MX      @       mail.hostinger.com       10
TXT     @       v=spf1 include:...        -
```

### Subdomain Records (if needed)

For API or admin subdomains:
```
Type    Name    Value                    TTL
----    ----    -----                    ---
A       api     YOUR_SERVER_IP           3600
A       admin   YOUR_SERVER_IP           3600
```

## Next Steps

After DNS is configured:

1. ✅ Wait for DNS propagation (24-48 hours)
2. ✅ Verify DNS records are correct
3. ✅ Set up nginx on your server (see `NGINX_SETUP.md`)
4. ✅ Obtain SSL certificate (Let's Encrypt)
5. ✅ Test the website: `https://whekel.com`

## Support

If you encounter issues:
- Check Hostinger's DNS documentation
- Contact Hostinger support
- Verify your server IP is correct and accessible
- Ensure nginx is running and configured correctly

