var admin = require("firebase-admin");

const firebaseConfig = {
  "type": "service_account",
  "project_id": "ticket-reception-2022",
  "private_key_id": "257d6cea2f875cfba180dee7cef67043aa64ae7c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDRwVNUxleToDiR\nTUChNkQd+bVZA6HOgtAxOeDgRsJJXpgN4VfMSRHX9ZdUFnigUU6DTlGmN0h4wN+A\nOdyqpO6fGoMjWkMk75oh6kDH346KSq6NWhj16Z8dKy5hukoy8cd51nUVXHujq9cG\nKVBWTBJVw1/hPDX54hoNhTtrGI0duURpqbAKlTmM4E39uyY1wCSSPZr/yaUQ86TE\nJrBfv3GkKswtTzOtL47p/NdDUsxjs4X1OZpAP6vunPcckDUnlSm8KGsw7tYYxfhL\ndCMRhhstTc3rasTJZZsNEiEko1zrR34T5l3D0zfPbEzJh4a5N4FwgxaDfiZYCH+o\nUCEdQ+pTAgMBAAECggEAMX2C0uLFcRCBqE7o6+Co68WqMyl3OQmGY8b7Nw+a8cK+\n7692jr3C1wicPvvaVEE63CJTg3tRvyQK1+9PEHg/0QxpWqMGaqWZ4VyrEj2+HQUH\n8FQMxaDsqO4yUF6q+SAw559hGrwqc/CsmEiRKvth7Bhf+/2/4oiliwEfhuJREWzi\nwwXH1o2Nxt/X1FsHbBDOCzE9cwU00hl6BcJgCmOCOouzadnfll656VcDfUNo9zpP\nNWLaqu81mpjWttl6mKUnc8HxZUsieedU+wZow5jiDwYwkjMa+1bwYPsRsf/PmdKi\nigM+Z91XXUAsRT+CMvULhK+lye+VH5YNyWPedkOS4QKBgQDt5+5deFJqlilQ2fFx\n9l7nVfrA0xGHShqjI4+eh6d696cEMldU6ZkGrkHUQ9SlW5e8yLf9bPuy7ERcBv5v\nNuJL9ZLIesWx1KZnHF/9R+wWglwxWwHreDYwjfMRyK5FsJao01TViyRN66s3dOcn\nw5/kf3sA4iSkZrNw3kit5At8IwKBgQDhtUspC1NxANpoANMgwHGk37Gdj2WF1yqo\nI96tG13eK64MZUzoxrH+SmItSwmyPNEyBpwAXH9Q1w/0V0aNstnWMdeOwhJuXlnD\nHB20JkC9Q8gMCxvctCO/ufPjYuLFL37HgBRdTrCddYBTV0/nMCVBXDGMbIftu9aI\niDWkjqFkEQKBgQCUqAMrBr9A+NmSOs0C7/a3SONpz7m5NtXUMKlSXuOJE+yZ07b8\nSQckxIg/0a6zMLts7GMDiTDxyW6hroEYD0xyOF3ixcx4ZS8haPqV8nYUTpq7AGn/\nr9r0lg5Xg3VZ+JD7pynwUYR66BLRkUvLbhKgHgRHNge9bqsbkNoLRl7izwKBgQCA\npX6jdEso+52A7gdogYfEu6NW9OaetJchouBGtnR4L1lSw2JkwuuszuTKgByUtMlf\nxBiitBX1E7+KOzyBg1FaHqqIOeGberea16muhqcbuUiKZMKKtzoxC2IRVsl+LqYK\nO9xfmnxcIx7zYa6vTOfPKycqrKmFPSz4QPqiQpGGoQKBgQCvgLyQZqpSAfu7lFnS\n26jyLtpoKjbbbB+k9wNeuoGctlnBo1XMBGoyrMGgyJUdvQ5m9i0vOakhQZklsath\nEt3xM0Kh+iN7DlsqusxeieLQbdyu7kdHbs0zpV6zG/8SqyjYrEnQhyGX0h0yA6AC\n8r9PY2qfnHqDb+d5j7P8W0wQHg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fst35@ticket-reception-2022.iam.gserviceaccount.com",
  "client_id": "110205223085079670758",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fst35%40ticket-reception-2022.iam.gserviceaccount.com"
}
;

module.exports = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});

const db = admin.firestore();

module.exports = db;