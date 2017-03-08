08/03/2017 14:30:56 --- a/hghooks/mozhghooks/whitelist_releng.py
+++ b/hghooks/mozhghooks/whitelist_releng.py
@@ -44,16 +44,17 @@ ALLOWED_USERS = set([
     'mshal@mozilla.com',
     'nthomas@mozilla.com',
     'qfortier@mozilla.com',
     'raliiev@mozilla.com',
     'rthijssen@mozilla.com',
     'aselagea@mozilla.com',
     'mtabara@mozilla.com',
     'sfraser@mozilla.com',
+    'aobreja@mozilla.com',
 ])


 def hook(ui, repo, node=None, source=None, **kwargs):
     if source in ('pull', 'strip'):
         return 0
