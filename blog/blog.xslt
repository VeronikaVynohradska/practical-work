<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Your Blog</title>
                <!-- Add CSS links or styles here -->
            </head>
            <body>
                <xsl:for-each select="blogpage/post">
                    <div class="post">
                        <h2><xsl:value-of select="title"/></h2>
                        <p><b>Date:</b> <xsl:value-of select="date"/></p>
                        <xsl:for-each select="content/section">
                            <h3><xsl:value-of select="header"/></h3>
                            <p><xsl:value-of select="p"/></p>
                        </xsl:for-each>
                        <xsl:for-each select="image">
                            <img>
                                <xsl:attribute name="src"><xsl:value-of select="@url"/></xsl:attribute>
                                <xsl:attribute name="alt"><xsl:value-of select="@alt"/></xsl:attribute>
                            </img>
                        </xsl:for-each>
                        <p><b>Keywords:</b> <xsl:value-of select="keywords"/></p>
                        <!-- Add structure for comments -->
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>