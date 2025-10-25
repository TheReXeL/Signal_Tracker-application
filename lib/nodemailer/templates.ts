export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<meta name="x-apple-disable-message-reformatting">
<title>Welcome to Signalist</title>
</head>
<body>
<!-- CTA Button -->
<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 40px 0; width: 100%;">
  <tr>
    <td align="center">
      <a href="{{dashboardUrl}}" style="display: block; width: 100%; background: linear-gradient(135deg, #FDD458 0%, #E8BA40 100%); color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; box-sizing: border-box;">
        Go to Dashboard
      </a>
    </td>
  </tr>
</table>

<!-- Footer Text -->
<p class="mobile-text dark-text-muted" style="margin: 40px 0 0 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important; text-align: center;">
  Signalist HQ, 200 Market Street, San Francisco, CA 94105<br>
  <a href="{{unsubscribeUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Unsubscribe</a> | 
  <a href="{{dashboardUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Visit Signalist</a><br>
  © 2025 Signalist
</p>
</body>
</html>`;

export const NEWS_SUMMARY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important;">
  <a href="{{unsubscribeUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Unsubscribe</a> | 
  <a href="{{dashboardUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Visit Signalist</a>
</p>
</body>
</html>`;

export const STOCK_ALERT_UPPER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<a href="{{dashboardUrl}}" style="display: block; width: 100%; max-width: 100%; box-sizing: border-box; color: #000000; background-color: #E8BA40; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center;">
  View Dashboard
</a>
<p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important;">
  <a href="{{unsubscribeUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Unsubscribe</a> | 
  <a href="{{dashboardUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Visit Signalist</a>
</p>
</body>
</html>`;

export const STOCK_ALERT_LOWER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<a href="{{dashboardUrl}}" style="display: block; width: 100%; max-width: 100%; box-sizing: border-box; background-color: #E8BA40; color: #000000; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center;">
  View Dashboard
</a>
<p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important;">
  <a href="{{unsubscribeUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Unsubscribe</a> | 
  <a href="{{dashboardUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Visit Signalist</a>
</p>
</body>
</html>`;

export const VOLUME_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<a href="{{dashboardUrl}}" style="display: inline-block; background-color: #E8BA40; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 16px; font-weight: 500; line-height: 1;">
  View Dashboard
</a>
<p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important;">
  <a href="{{unsubscribeUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Unsubscribe</a> | 
  <a href="{{dashboardUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Visit Signalist</a>
</p>
</body>
</html>`;

export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #CCDADC !important;">
  <a href="{{unsubscribeUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Unsubscribe</a> | 
  <a href="{{dashboardUrl}}" style="color: #CCDADC !important; text-decoration: underline;">Visit Signalist</a>
</p>
</body>
</html>`;